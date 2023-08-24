import { Currency } from "./currency";
import { BitPurchasableMechanicState, RebuyableMechanicState } from "./game-mechanics";
import { DC } from "./constants";

class MendingUpgradeState extends BitPurchasableMechanicState {
  constructor(config) {
    super(config);
    this.registerEvents(config.checkEvent, () => this.tryUnlock());
  }

  get name() {
    return this.config.name;
  }

  get shortDescription() {
    return this.config.shortDescription ? this.config.shortDescription() : "";
  }

  get requirement() {
    return typeof this.config.requirement === "function" ? this.config.requirement() : this.config.requirement;
  }

  get lockEvent() {
    return typeof this.config.lockEvent === "function" ? this.config.lockEvent() : this.config.lockEvent;
  }

  get currency() {
    return Currency.mendingPoints;
  }

  get bitIndex() {
    return this.id;
  }

  get bits() {
    return player.mending.upgradeBits;
  }

  set bits(value) {
    player.mending.upgradeBits = value;
  }

  get hasPlayerLock() {
    return (player.mending.reqLock.mending & (1 << this.bitIndex)) !== 0;
  }

  set hasPlayerLock(value) {
    if (value) player.mending.reqLock.mending |= 1 << this.bitIndex;
    else player.mending.reqLock.mending &= ~(1 << this.bitIndex);
  }

  get isLockingMechanics() {
    const shouldBypass = this.config.bypassLock?.() ?? false;
    return this.hasPlayerLock && this.isPossible && !shouldBypass && !this.isAvailableForPurchase;
  }

  // Required to be changed this way to avoid direct prop mutation in Vue components
  setMechanicLock(value) {
    this.hasPlayerLock = value;
  }

  toggleMechanicLock() {
    this.hasPlayerLock = !this.hasPlayerLock;
  }

  // Note we don't actually show the modal if we already failed or unlocked it
  tryShowWarningModal(specialLockText) {
    if (this.isPossible && !this.isAvailableForPurchase) {
      Modal.upgradeLock.show({ upgrade: this, isImaginary: false, specialLockText });
    }
  }

  get isAvailableForPurchase() {
    return this.id <= 3 || this.id === 5 || this.id === 9 || this.id === 15;
  }

  get isPossible() {
    return this.config.hasFailed ? !this.config.hasFailed() : true;
  }

  tryUnlock() {
    const mendingReached = PlayerProgress.mendingUnlocked()
    if (!mendingReached || this.isAvailableForPurchase || !this.config.checkRequirement()) return;
    player.mending.upgReqs |= (1 << this.id);
    GameUI.notify.reality(`You've unlocked a Mending Upgrade: ${this.config.name}`);
    this.hasPlayerLock = false;
  }

  onPurchased() {
    EventHub.dispatch(GAME_EVENT.MENDING_UPGRADE_BOUGHT);
    const id = this.id;
    switch(id){
      case 2:{
        Currency.eternities.bumpTo(1e6);
        Currency.infinities.bumpTo(1e12);
        Currency.realities.bumpTo(10000);
        player.replicanti.unl = true;
        Glyphs.addToInventory(GlyphGenerator.randomGlyph({ actualLevel: 70, rawLevel:70 },undefined, 'power'));
        break;
      }
      case 3:{
        for (let i = 1; i <= 12; i++){
          EternityChallenge(i).completions = 5;
          if (i === 12) break;
        }
      }
      case 5:{
        player.celestials.teresa.unlockBits += 2;
        break;
      }
      case 9:{
        if (player.celestials.teresa.unlockBits % 2 != 1){
          player.celestials.teresa.unlockBits += 1;
        }
        if (player.celestials.teresa.bestRunAM.lt(DC.E1E10)){
          player.celestials.teresa.bestRunAM = DC.E1E10;
        }
        break;
      }
      default:{
          //apparently leaving this blank is equivalent to Python's "pass"
      }
    }
  }
}

class RebuyableMendingUpgradeState extends RebuyableMechanicState {
  get currency() {
    return Currency.mendingPoints;
  }

  get boughtAmount() {
    return player.mending.rebuyables[this.id];
  }

  set boughtAmount(value) {
    player.mending.rebuyables[this.id] = value;
  }
}

MendingUpgradeState.index = mapGameData(
  GameDatabase.mending.upgrades,
  config => (config.id % 5 === 1
    ? new RebuyableMendingUpgradeState(config)
    : new MendingUpgradeState(config))
);

/**
 * @param {number} id
 * @return {MendingUpgradeState|RebuyableMendingUpgradeState}
 */
export const MendingUpgrade = id => MendingUpgradeState.index[id];

export const MendingUpgrades = {
  /**
   * @type {(MendingUpgradeState|RebuyableMendingUpgradeState)[]}
   */
  all: MendingUpgradeState.index.compact(),
  get allBought() {
    return (player.mending.upgradeBits >> 6) + 1 === 1 << (GameDatabase.mending.upgrades.length - 5);
  }
};
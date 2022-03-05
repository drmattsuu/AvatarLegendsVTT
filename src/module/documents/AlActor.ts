import { CampaignData } from '../templates/ActorTemplates';

/**
 * AlActor class that extends the base Actor functionality for AvatarLegends
 * specific actors.
 * @extends{Actor}
 */
export class AlActor extends Actor {
  /**
   *  Prepare data for the actor
   */
  override prepareData(): void {
    super.prepareData();
  }

  /**
   * Augment the basic actor detail with additional dynamic data.
   */
  override prepareDerivedData(): void {
    this._prepCampaignData();
    // todo (mb): prepdata for characters and npcs
  }

  /**
   * Sets up the campaign actor types and copies the name into the data.name
   * read only slot.
   */
  _prepCampaignData(): void {
    const actorData = this.data;
    if (actorData.type !== 'campaign') {
      return;
    }

    const data = actorData.data as CampaignData;
    data.name = actorData.name;
  }

  /**
   * Prepare a data object which defines the data schema used by dice
   * roll commands against this Actor
   * @returns object that defines the data schema for dice roll commands.
   */
  override getRollData() {
    const data = super.getRollData();

    // todo (mb): prep roll data for characters and npcs
    return data;
  }
}

import { EffectList } from '@types';

class TrackSection {
  public id: number;
  public trackId: number;
  public sourceId: number;
  public channelStartTime: number;
  public channelEndTime: number;
  public parsedChannelStartTime: number;
  public parsedChannelEndTime: number;
  public trackStartTime: number;
  public length: number;
  public effectList: EffectList[];
  public audioStartTime: number;

  constructor({
    id,
    trackId,
    sourceId,
    channelStartTime,
    channelEndTime,
    parsedChannelStartTime,
    parsedChannelEndTime,
    trackStartTime,
    effectList = [],
    audioStartTime = 0
  }) {
    this.id = id;
    this.trackId = trackId;
    this.sourceId = sourceId;
    this.channelStartTime = channelStartTime;
    this.channelEndTime = channelEndTime;
    this.parsedChannelStartTime = parsedChannelStartTime;
    this.parsedChannelEndTime = parsedChannelEndTime;
    this.trackStartTime = trackStartTime;
    this.length = this.channelEndTime - this.channelStartTime;
    this.effectList = effectList;
    this.audioStartTime = audioStartTime;
  }
}

export default TrackSection;

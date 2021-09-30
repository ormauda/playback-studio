import {PlaybackStudio} from '../playback-studio';

describe('playback-studio', () => {
    it('should exist', () => {
        const playbackStudio = new PlaybackStudio();
        
        expect(playbackStudio).not.toBeNull();
    })
});
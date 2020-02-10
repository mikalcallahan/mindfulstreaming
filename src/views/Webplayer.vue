<template>
  <div class="webplayer">
    <main>
      <div class="playlist-container">
        <span v-if="showPlayer" @click="togglePlaylist">playlist</span>
        <span v-else @click="togglePlaylist">player</span>
      </div>
      <transition name="fade" mode="out-in">
      <section key=1 class="player" v-if="showPlayer">
        <h3 class="song-title">{{ current.artist }} - <span>{{ current.title }}</span></h3>
        <div class="controls">
          <span class="prev" @click="prev">Prev</span>
          <span class="play" v-if="!isPlaying" @click="play">Play</span>
          <span class="pause" v-else @click="play">Pause</span>
          <span class="next" @click="next">Next</span>
        </div>
      </section>
      <section key=2 class="playlist" v-else>
        <h3>Playlist</h3>
        <ul class="playlist-list">
        <li v-for="song in songs" :key="song.src"
        @click="$store.dispatch('isPlaying'); play(song)"
        :class="(song.src == current.src) ? 'song playing' : 'song'">
          {{ song.artist }} - {{ song.title }}
        </li>
        </ul>
      </section>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import meditation1 from '@/assets/meditation1.mp3';
import meditation2 from '@/assets/meditation2.mp3';

export default {
  name: 'Webplayer',
  components: {
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentTrackNumber',
      'showPlayer',
    ]),
  },
  data() {
    return {
      current: {},
      songs: [
        {
          title: 'The Feel, They Know',
          artist: 'Shiva',
          src: meditation1,
        },
        {
          title: 'I am Love',
          artist: 'Shiva',
          src: meditation2,
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      this.$store.dispatch('isPlaying');
      if (typeof song.src !== 'undefined') {
        this.current = song;
        this.player.src = this.current.src;
      }
      // eslint-disable-next-line no-unused-expressions
      this.isPlaying ? this.player.play() : this.player.pause();
      this.player.addEventListener('ended', () => this.next());
    },
    next() {
      this.$store.dispatch('nextTrack');
      this.current = this.songs[this.currentTrackNumber];
      this.$store.dispatch('isPlaying');
      this.play(this.current);
    },
    prev() {
      this.$store.dispatch('prevTrack');
      this.current = this.songs[this.currentTrackNumber];
      this.$store.dispatch('isPlaying');
      this.play(this.current);
    },
    togglePlaylist() {
      this.$store.dispatch('togglePlaylist');
    },
  },
  created() {
    this.$store.dispatch({
      type: 'setNumberOfTracks',
      numberOfTracks: this.songs.length,
      currentTrackNumber: 0,
    });
    this.current = this.songs[this.currentTrackNumber];
    this.player.src = this.current.src;
  },
};
</script>

<style src="@/styles/webplayer.scss" lang="scss" scoped></style>

import Vue from 'vue';
import Vuex from 'vuex';
import {
  not, gte, lte,
} from 'ramda';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    currentTrackNumber: 0,
    numberOfTracks: 0,
    showPlayer: true,
  },
  getters: {
    isPlaying: (state) => state.isPlaying,
    currentTrackNumber: (state) => state.currentTrackNumber,
    numberOfTracks: (state) => state.numberOfTracks,
    showPlayer: (state) => state.showPlayer,
  },
  mutations: {
    setNumberOfTracks(state, payload) {
      state.numberOfTracks = payload.numberOfTracks;
      state.currentTrackNumber = payload.currentTrackNumber;
    },
    isPlaying(state) {
      state.isPlaying = not(state.isPlaying);
    },
    nextTrack(state) {
      if (gte(state.currentTrackNumber, (state.numberOfTracks - 1))) {
        state.currentTrackNumber = 0;
      } else state.currentTrackNumber += 1;
    },
    prevTrack(state) {
      if (lte(state.currentTrackNumber, 0)) {
        state.currentTrackNumber = state.numberOfTracks - 1;
      } else state.currentTrackNumber -= 1;
    },
    togglePlaylist(state) {
      state.showPlayer = not(state.showPlayer);
    },
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setNumberOfTracks({ commit }, payload: any) {
      commit('setNumberOfTracks', payload);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isPlaying({ commit }) {
      commit('isPlaying');
    },
    nextTrack({ commit }) {
      commit('nextTrack');
    },
    prevTrack({ commit }) {
      commit('prevTrack');
    },
    togglePlaylist({ commit }) {
      commit('togglePlaylist');
    },
  },
  modules: {
  },
});

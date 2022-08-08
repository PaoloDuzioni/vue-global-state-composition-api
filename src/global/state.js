import { ref, computed } from 'vue';

// Define state
const state = ref({
    count: 0,
});

// Getters
// Computed so we dont allow to change the state directly
const getCount = computed(() => state.value.count);

// Setters
function addCount() {
    state.value.count++;
}

function subCount() {
    if (state.value.count > 0) {
        state.value.count--;
    }
}

// Exports
export default {
    getCount,
    addCount,
    subCount,
};

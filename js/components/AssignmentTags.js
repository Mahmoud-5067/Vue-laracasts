export default {
  template: `
    <div class="flex gap-2 mb-6 flex-wrap">
    <button 
    @click="$emit('update:modelValue', tag)"
      v-for='tag in tags'
      class="border border-blue-500 px-2 py-1 text-xs rounded-lg"
      :class='{
        "bg-blue-500 text-white" : tag === modelValue,
        "text-blue-500" : tag !== modelValue,
      }'
      
      >
      {{ tag }}
    </button> 
  </div>
    `,

    props : {
        initialTags: Array,
        modelValue: String,
    },


    computed: {
    
        tags() {
          return ['all', ...new Set(this.initialTags)];
        },
      },
};

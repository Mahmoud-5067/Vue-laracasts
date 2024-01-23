export default {
    template: `
        <form @submit.prevent="add">
            <div class="text-black border border-gray-600 my-4 flex max-w-full">
                <input v-model="newAssignment" placeholder="New assignmnet..." class="px-2 py-1 outline-none max-w-[78%]">
                <button type="submit" class="bg-white px-2 flex-1 border-l"> Add </button>
            </div>
        </form>
    `,

    data() {
        return {
          newAssignment: '',
        };
      },
      
      methods: {
        add() {
          this.$emit('add', this.newAssignment);
          this.newAssignment = '';
        },
      },
}
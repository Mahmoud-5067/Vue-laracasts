export default {
    template: `
        <form @submit.prevent="add">
            <div class="text-black border border-gray-600 my-6">
                <input v-model="newAssignment" placeholder="New assignmnet..." class="p-2 outline-none ">
                <button type="submit" class="bg-white p-2 border-l"> Add </button>
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
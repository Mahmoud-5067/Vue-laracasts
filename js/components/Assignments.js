import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },

  template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress"> 
              <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <assignment-list 
              v-show="showCompleted"
              :assignments="filters.completed" 
              title="Completed" 
              canToggle
              @toggle="showCompleted = !showCompleted"  
            ></assignment-list>
        </section>
    `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },

  created() {
    fetch("http://localhost:3003/assignments")
      .then((response) => response.json())
      .then((data) => (this.assignments = data));
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
        tag: null,
      });
    },
  },
};

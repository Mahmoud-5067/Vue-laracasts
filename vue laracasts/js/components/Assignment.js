export default {
  template: `
    <li class="px-2 py-1">
        <label>
            <input type="checkbox" v-model="assignment.complete" class="mr-2"/>
            {{ assignment.name }}
        </label>
    </li>
    `,

  props: {
    assignment: Object,
  },
};

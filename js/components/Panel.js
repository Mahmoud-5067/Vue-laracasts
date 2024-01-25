export default {
  template: `
  <section class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
      <h2 class="font-bold">
        <slot name="heading" />
      </h2>

      <slot />

    </section>
  `,
};

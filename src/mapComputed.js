export const mapComputed = (module, fields) => {
  const obj = {};

  fields.forEach(field => {
    const name = field.name || field.getter || field;
    const getter = field.getter || field;
    const setter = field.setter || `set${field.firstToUpper()}`;
    obj[name] = {
      get() {
        return this.$store.getters[`${module}/${getter}`];
      },
      set(value) {
        this.$store.commit(`${module}/${setter}`, value, {
          root: true
        });
      }
    };
  });

  return obj;
};

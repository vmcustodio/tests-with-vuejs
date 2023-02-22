<template>
  <div>
    <input v-model="number1" data-testid="number1__input" />
    <input v-model="number2" data-testid="number2__input" />
    <button @click="sum()">Somar</button>
    <p>{{ resultado }}</p>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      resultado: 0,
      message: '',
    };
  },
  methods: {
    sum() {
      if (!this.number1 || !this.number2) {
        return (this.message =
          'não foi possível mostrar o resultado, por favor insira os dois números para realizar a soma.');
      }
      return (this.resultado = +this.number1 + +this.number2);
    },
  },
};
</script>

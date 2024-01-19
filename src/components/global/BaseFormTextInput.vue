<template>
  <div>
    <input
      class="form-input"
      :class="{ hasError }"
      type="text"
      :minlength="min"
      :maxlength="max"
      :placeholder="placeholder"
      v-model="currentValue"
      @input="onInput"
      @change="onChange"
    />
    <span class="from-input_error-message" v-show="hasError">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseFormTextInput",

  props: {
    value: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    regex: {
      type: RegExp,
      required: false,
      default: null,
    },
    validationType: {
      type: String,
      required: false,
      default: "",
    },
    min: {
      type: Number,
      required: false,
      default: 1,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },
  },

  data() {
    return {
      hasError: false,
      currentValue: this.value,
    };
  },

  computed: {
    errorMessage() {
      if (
        this.currentValue.length === 0 ||
        this.currentValue === null ||
        this.currentValue === undefined
      ) {
        return "لطفا این فیلد را پر کنید";
      } else {
        return this.validationMessage;
      }
    },

    validationMessage() {
      let message = "";
      if (this.validationType === "email") {
        message = "ایمیل وارد شده صحیح نیست";
      } else if (this.validationType === "phoneNumber") {
        message = "شماره موبایل وارد شده صحیح نیست";
      } else if (this.validationType === "phone/email") {
        message = "شماره موبایل یا ایمیل وارد شده صحیح نیست";
      } else {
        message = "مقدار وارد شده صحیح نیست";
      }

      return message;
    },
  },

  methods: {
    onInput(event) {
      if (this.regex) {
        if (this.regex.test(event.target.value)) {
          this.hasError = false;
          this.$emit("update:value", event.target.value);
        } else {
          this.$emit("update:value", "");
        }
      } else {
        this.$emit("update:value", event.target.value);

        if (event.target.value.length === 0) {
          this.hasError = true;
        } else {
          this.hasError = false;
        }
      }
    },

    onChange(event) {
      if (!this.regex.test(event.target.value)) {
        this.hasError = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  font-size: 14px;
  width: 100%;
  height: 47px;
  border-radius: 8px;
  border: 1px solid var(--secondary-color);
  padding: 15px 14px;
  font-family: PeydaWeb;
  color: var(--secondary-color);
}

.hasError {
  border-color: red;
}
.from-input_error-message {
  color: red;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.2px;
  margin-top: 5px;
  display: flex;
  font-family: PeydaWeb;
  align-self: flex-start;
  margin-right: 5px;
}
</style>

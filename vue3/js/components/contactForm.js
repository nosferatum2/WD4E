zmSteeps.component('contact-form', {
  template:
    /*html*/
    `
    <div class="container">
      <h3>Contact Form</h3>
      <form 
        action="mailto:nosferatum2@i.ua" 
        method="POST" 
        enctype="text/plain"
        autocomplete="on"
        @submit="onSubmit"
      >
        <p v-if="errors.length">
          <b>You need to fill in next fields:</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>
        <div
          v-for="item in formFields"
          :key="item.id"
        >
          <label 
            :for="item.id"
          >
            {{ item.label }}:
          </label>
          
          <input 
            v-if="item.type !== 'textarea'"
            :type="item.type"
            :id="item.id"
            :name="item.id"
            v-model="item.value"
            :placeholder="item.placeholder"
          >
          <textarea
            v-if="item.type === 'textarea'"
            :id="item.id"
            :name="item.id"
            v-model="item.value"
            :placeholder="item.placeholder"
          >
          </textarea>
        </div>
  
        <button 
          type="submit"
          @click="clearErrors"
        >
          Submit
        </button>
      </form>
    </div>
    `,

  data() {
    return {
      errors: [],
      formFields: [
        {
          type: 'text',
          label: 'Name',
          id: 'userName',
          value: '',
          placeholder: 'Your name...'
        },
        {
          type: 'email',
          label: 'Email',
          id: 'email',
          value: '',
          placeholder: 'your@domain.com'
        },
        {
          type: 'textarea',
          label: 'Message',
          id: 'message',
          value: '',
          placeholder: 'Write your message here...'
        }
      ],

    }
  },
  methods: {
    onSubmit(e) {
      // console.log(this.formFields[0].value, this.formFields[1].value, this.formFields[2].value)
      // console.log(this.formFields)
      this.formFields.forEach((el) => {
        if (el.value === '') {
          this.errors.push(`${el.label} !`);
          // console.log(`Заполни поле ${el.label} !`);
          e.preventDefault();
        }
        // return console.log(el.value)

      })
    },
    clearErrors() {
      this.errors.splice(0, this.errors.length)
    }
  },
  computed: {

  }

})
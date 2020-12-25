<template>
    <v-container class="px-0" fluid>
        <v-btn color="primary">anana</v-btn>

        <div id='input-demo'>
            <input v-model="input" placeholder="edit me">
        </div>
        <v-checkbox
                v-model="checkbox"
                :label="`Checkbox 1: ${checkbox.toString()}`"
        ></v-checkbox>
        <div id='checkbox-demo'>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>

        </div>

        <div id='mul-checkbox-demo'>
            <input type="checkbox" id="jack" value="Jack" v-model="mul_checkbox">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="mul_checkbox">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="mul_checkbox">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ mul_checkbox }}</span>
        </div>

        <div id='radio-demo'>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>

        <div id='select-demo'>
            <select v-model="selectedOption">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selectedOption }}</span>
        </div>

        <div id='mul-select-demo'>
            <select v-model="mul_selected" multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br>
            <span>Selected: {{ mul_selected }}</span>
        </div>

        <div id="example-1">
            <button v-on:click="counter += 1">Đếm</button>
            <p>{{ counter }} number</p>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "CheckboxDemo",
        data() {
            return {
                checkbox: true,
                counter: 1,
                input: 'input',
                checked: true,
                mul_checkbox: [],
                picked: '',
                radioGroup: 1,
                selectedOption: '',
                mul_selected: []
            }
        }
    }
</script>

<style scoped>
</style>

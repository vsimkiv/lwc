/* eslint-disable no-console */
import { LightningElement, track, api } from 'lwc';

export default class GetSet extends LightningElement {

    @track rec = 'Default';
    
    @api
    get record() {
        return this.rec;
    }

    set record(value) {
        this.rec = value;
        console.log("Value", value);
    }

    handleClick() {
        console.log("Rec", this.rec);
    }

    handleNameChange(event) {
        this.record = event.target.value;
    }

}
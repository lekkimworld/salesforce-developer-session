import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const FIELDS = [
  "Contact.Tags__c"
];

export default class TagsAsPills extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
  contact;

  get tags() {
    return this.contact.data.fields.Tags__c.value.split(" ");
  }
  
  handleClick(ev) {
    const event = new ShowToastEvent({
      title: "Tag Clicked",
      message:
        `You clicked the ${ev.target.label} tag!`
    });
    this.dispatchEvent(event);
  }
}

import { LightningElement, api, wire } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import TAGS_FIELD from "@salesforce/schema/Contact.Tags__c";

export default class TagsAsPills extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields: [TAGS_FIELD] })
  contact;

  get tags() {
    return getFieldValue(this.contact.data, TAGS_FIELD).split(" ");
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

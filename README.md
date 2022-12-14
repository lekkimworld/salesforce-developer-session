# developer-session #

```
sfdx force:org:create --setdefaultusername -f config/project-scratch-def.json
sfdx force:data:tree:import -p data/Account-Contact-plan.json
sfdx force:community:create --templatename 'Build Your Own' --urlpathprefix devsession --name 'Salesforce Developer Session' --description 'Experience Cloud Site for Salesforce Developer Session' 
sfdx force:source:deploy -m ApexClass,LightningComponentBundle:contactData,LightningComponentBundle:helloWorld,LightningComponentBundle:restCallOut,LightningComponentBundle:apexStaticSchema
```

```
sfdx force:source:deploy -m LightningComponentBundle:tagsAsPills
```
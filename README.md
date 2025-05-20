UMBC JuJitsu resources.

The Syllabus for the UMBC JuJitsu club is provided here. 

In its current form it can be viewed at
https://cfergus-umbc-jujitsu.deno.dev/syllabus.html , as deployed through deno deploy


# Developing

Install deno.

`cd react-site`
`deno task dev`

# Deploying

## Dynamic site

The Dynamic (react) site can be deployed using these commands, assuming deno.json is setup.

1. `deno task build`
1. `cd react-site/dist/`
1. `deployctl deploy`

This creates a "preview" deployment. Review the site at the URL provided. 
If approved, promote it to production using:

`deployctl deploy --prod`

(you can do this without the preview step if you like)


If needed, the project name can be specified as "--project=cfergus-umbc-jujitsu"

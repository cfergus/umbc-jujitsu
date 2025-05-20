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

The Dynamic (react) site can be deployed using.

`cd react-site/dist/`
`deployctl deploy --project=cfergus-umbc-jujitsu --entrypoint=jsr:@std/http/file-server`

This creates a "preview" deployment. Review the site at the URL provided. 
If approved, promote it to production using:

`deployctl deploy --prod --entrypoint=jsr:@std/http/file-server`

(you can do this without the preview step if you like)


If needed, the project name can be specified as "--project=cfergus-umbc-jujitsu"

# actionverb.com

Action Verb Company Marketing Website.

Mostly exists at this point to pitch the benefits of employment at
Action Verb.


## Local Development Setup

There are two ways to use the local development environment.  Without
Vae and with Vae.  The without Vae method uses Jekyll and will have no
access to PHP.

Currently we are not using  any PHP features, however, this may change
in the future.


### With Vae

Install by
`gem install vae`

Note:  Vae Local 0.7 or up is required.

Start the Vae local server:

`vae --username=[your username] --full-stack`

You can now access the site at [http://localhost:9999](http://localhost:9999/).


### Without Vae method:  Jekyll

Install Jekyll and dependencies

`bundle install`

Start Jekyll server

`bundle exec jekyll serve`

You can now access the site at [http://localhost:4000](http://localhost:4000/).


## Deployment

Content pushed to the `master` branch on Github will be deployed automatically.

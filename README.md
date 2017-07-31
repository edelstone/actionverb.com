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


## Styles

### Design System

The Action Verb website uses the [Tachyons design system](http://tachyons.io/docs/), which is a lightweight, mostly un-opinionated, and modular CSS system. We used the [Sass repo](https://github.com/tachyons-css/tachyons-sass) for this project.

### Brand standards

See [the Action Verb wiki](https://github.com/actionverb/wiki/wiki/Brand-Standards#action-verb-company-branding) for a breakdown of the basic brand elements used across the site.

### Accessibility

All colors should meet [WCAG 2.0 contrast ratios, AA compliance](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast), which is at least 4.5:1 for text smaller than 18pt and 3:1 for text larger than 18pt. [Check color contrast](http://leaverou.github.io/contrast-ratio/) when making color choices. Additionally, all links should be keyboard tab-friendly.

## Deployment

Content pushed to the `master` branch on Github will be deployed automatically.

## Developer's Certificate of Origin 1.0

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I
  have the right to submit it under the open source license indicated
  in the file; or
* (b) The contribution is based upon previous work that, to the best
  of my knowledge, is covered under an appropriate open source license
  and I have the right under that license to submit that work with
  modifications, whether created in whole or in part by me, under the
  same open source license (unless I am permitted to submit under a
  different license), as indicated in the file; or
* (c) The contribution was provided directly to me by some other
  person who certified (a), (b) or (c) and I have not modified it.


## Code of Conduct

This Code of Conduct is adapted from [Rust's wonderful
CoC](https://github.com/rust-lang/rust/wiki/Note-development-policy#conduct).

* We are committed to providing a friendly, safe and welcoming
  environment for all, regardless of gender, sexual orientation,
  disability, ethnicity, religion, or similar personal characteristic.
* Please avoid using overtly sexual nicknames or other nicknames that
  might detract from a friendly, safe and welcoming environment for
  all.
* Please be kind and courteous. There's no need to be mean or rude.
* Respect that people have differences of opinion and that every
  design or implementation choice carries a trade-off and numerous
  costs. There is seldom a right answer.
* Please keep unstructured critique to a minimum. If you have solid
  ideas you want to experiment with, make a fork and see how it works.
* We will exclude you from interaction if you insult, demean or harass
  anyone.  That is not welcome behaviour. We interpret the term
  "harassment" as including the definition in the [Citizen Code of
  Conduct](http://citizencodeofconduct.org/); if you have any lack of
  clarity about what might be included in that concept, please read
  their definition. In particular, we don't tolerate behavior that
  excludes people in socially marginalized groups.
* Private harassment is also unacceptable. No matter who you are, if
  you feel you have been or are being harassed or made uncomfortable
  by a community member, please contact one of the channel ops or any
  of the TC members immediately with a capture (log, photo, email) of
  the harassment if possible.  Whether you're a regular contributor or
  a newcomer, we care about making this community a safe place for you
  and we've got your back.
* Likewise any spamming, trolling, flaming, baiting or other
  attention-stealing behaviour is not welcome.
* Avoid the use of personal pronouns in code comments or
  documentation. There is no need to address persons when explaining
  code (e.g. "When the developer")

  ## Code editing

### Adding new pages
1. Create new page content including the layout, title and copy.
2. Update ```/locale/en/site.json``` to provide page link attributes.
3. Update the relevant ```/layout``` to add a link to the new page.

#### Create the page content
Create a new markdown file in ```/local/en```.  As specified in the [README.md](./README.md#layout), initial development happens in English.

At the top of the markdown file, set a page the title and layout.

```
---
title: Events
layout: contribute.hbs
---

[Event copy goes here]
```

#### Update locale site.json to add link attributes
Open ```local/en/site.json``` and find the appropriate page structure. Add a new object defining the link attributes.

```
"event": {
"link": "get-involved/events",
"text": "Events"
}
```

#### Update the layout to add a link
Using the example layout, open ```/layouts/contribute.hbs``` and add your new link to the markup.  It's essential to update the handlebars paths to site.json.

```
{{site.locale}}/{{site.getinvolved.events.link}}
```

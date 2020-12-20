Random Words
=================

This app provides RESTful access to the `friendly-words` npm module.

Usage
---

You have access to 7 endpoints

```
wordPairs
# Returns a JSON array of word pairings in the form of `["{predicate}-{object}", ...]`

# For example:
$ curl friendly-words.glitch.me/word-pairs
> ["green-grasshopper","bramble-hockey","dour-cereal","oceanic-alibi","resonant-editorial","tin-clock","panoramic-match","honorable-ski","carnation-partridge","nettle-preface"]
```

```
predicates

# Returns a JSON array of words which are grammatical predicates.

# For example:
$ curl friendly-words.glitch.me/predicates
> ["warp","windy","paper","shrouded","iridescent","sage","organic","modern","quark","incandescent"]
```

```
objects
# Returns a JSON array of words which are grammatical objects.

# For example:
$ curl friendly-words.glitch.me/objects
> ["millennium","report","guardian","match","wallaby","turnip","range","jump","behavior","platinum"]
```

```
teams
# Returns a JSON array of words that are synonyms for 'team'

# For example:
$ curl friendly-words.glitch.me/teams
> ["troupe","group","posse","coven","team","alliance","party","squad","crew","band"]
```

```
teamPairs
# Returns a JSON array of word pairings in the form of `["{team-synonym}-{object}", ...]`

# For example:
$ curl friendly-words.glitch.me/team-pairs
> ["coal-coven","delirious-posse","boom-team","handsomely-crew","future-party","lyrical-band","abaft-troupe","thunder-squad","cumbersome-alliance","plain-group"]

```

```
collections
# Returns a JSON array of words that are synonyms for 'collection'

# For example:
$ curl friendly-words.glitch.me/collections
> ["mix","bricolage","playlist","assortment","potpourri","melange","album","collection","variety","compilation"]
```

```
collectionPairs
# Returns a JSON array of word pairings in the form of `["{collection-synonym}-{object}", ...]`

# For example:
$ curl friendly-words.glitch.me/collection-pairs
> ["vivid-collection","emerald-mix","past-variety","mixed-bricolage","insidious-potpourri","rare-melange","crimson-playlist","rune-assortment","giddy-compilation","skillful-album"]

```

Landing Page
------------
We've pulled a sample from the API to populate the landing page of this site.


The Words
---------

The words are pulled from curated files. We want the words and their pairings to be friendly, positive, inspiring, whimsical, memorable, etc.  They should also be words that most people can easily remember and spell.

All of the words and their generated pairings should be safe for children of all cultures. This means that we permit absolutely no word pairings that invoke to hate speech, hostility, derogatory terms, etc. 

Despite our best efforts, it's easy for a pair of benign words to be combined into something inappropriate. Whenever we notice a generated pair that is problematic, we'll remove at least one of the words from that pair so that it won't reoccur. We'll err on the side of trusting reports and removing potentially inappropriate words rather than defending the appropriate uses of a word.

When adding words to the list, an abundance of common sense is required. If the word can be used as a slang term for an ethniticty or nationality, there's probably a context where it'll pair up with a verb or adjective that can make it feel unwelcome... so be mindful and avoid those.


Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ

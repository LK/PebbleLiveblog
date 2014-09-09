# PebbleLiveblog

Read liveblogs from [The Verge](https://theverge.com) on your Pebble.

**Disclaimer: This is a quick hack I threw together in an hour or two, so things will break and stuff won't work. You can report bugs or suggestions in the issue tracker, but there's quite a few things on my todo list already if this were ever to develop into a more full-fledged app. Pull requests are always welcome.**

### Installation

1. Sign in to [CloudPebble](http://cloudpebble.com) with your Pebble account.
2. In the Projects tab, click "Import"
3. Select "Import from GitHub", fill in whatever project name you'd like, and "github.com/LK/PebbleLiveblog" as the GitHub project. You might need to go to settings and link your GitHub account in order to do this.
4. Open the project, select a file in the left, click the green run button, and assuming everything's set up you're good to go.

If you run into any problems drop me a tweet (I'm [@LennyKhazan](https://twitter.com/LennyKhazan)) and I'll try to get back to you within a few hours at most (no promises though).

### Usage

As of right now the app is hardcoded for the Apple's September 9th iPhone 6 Event livestream, but changing the URL should be easy enough. In-app configuration for this is high on my list.

When you launch the app it will load the last 15 messages and display them. Press select to go to the next message. Press select when you're on the main screen to load new messages.

The app resets if you leave and re-enter, so if you quit and open it again it could show you messages you've seen already (this is by design, to prevent some potential bug from permanently screwing up new message loading).

That's it. Really simple. Missing lots of features, but enough to stay up to date in the middle of math class.

# PebbleLiveblog

Read liveblogs from [The Verge](https://theverge.com) on your Pebble.

### Installation

1. Sign in to [CloudPebble](http://cloudpebble.com) with your Pebble account.
2. In the Projects tab, click "Import"
3. Select "Import from GitHub", fill in whatever project name you'd like, and "github.com/tomthecarrot/PebbleLiveblog" as the GitHub project. You might need to go to settings and link your GitHub account in order to do this.
4. Open the project, select a file in the left, click the green run button, and assuming everything's set up you're good to go.

If you run into any problems feel free to submit an issue on the tracker.

### Usage

The app uses a hardcoded URL for a particular liveblog, but changing the URL can be done at the top of the code.

When you launch the app it will load the last 15 messages and display them. Press select to go to the next message. Press select when you're on the main screen to load new messages.

The app resets if you leave and re-enter, so if you quit and open it again it could show you messages you've seen already (this is by design, to prevent some potential bug from permanently messing up new message loading).

That's it. Really simple, but enough to stay up to date in the middle of math class.

### Credit
The original developer of PebbleLiveblog is [Lenny Khazan](https://github.com/LK).

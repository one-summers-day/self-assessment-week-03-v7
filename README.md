# Week 03 v7 Assessment

## Guidelines

Assessments are meant to give you and Hack Reactor staff an idea of how well you understand, or can figure out, the material that you covered recently.

- Turn off all communication devices such as your phone, email, Slack, etc.
- Fork this repo and clone down your fork to your laptop.
- Commit **working** code early and often (at least after every prompt). You are graded on your commit messages in addition to the code that you write.

Tips: 
- Use the Chrome Console [Snippets](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets) feature to author, test and debug your code before committing. An approved alternate tool is [JSFiddle](https://jsfiddle.net/). You are **NOT PERMITTED** to use [repl.it](https://repl.it/) to work on or complete this assessment.
- Do at least a little work on *every* prompt, even if you only leave comments that describe your intent. **Leaving a prompt blank is tantamount to failing a prompt. You'll get much more credit even for writing comments or pseudo-code that describe your intent**
- You **must** submit a pull request for all assessments **on time** (guidelines for how to submit a pull request are below). Give yourself several minutes to do this at the end of the time allotted for the assessment
- After completing the assessment, if there are any prompts you felt you did not do well on, or, that you would not know how to assess whether or not you did well on, make plans to improve your skills on that topic **as soon as possible.**

## Using and Referencing Outside Resources

Each prompt contains a list of resources you are allowed to use while working on that prompt. Using *any* other resources, online or otherwise, including course materials, or communicating through any mechanism with anyone other than Hack Reactor staff during the assessment is academic dishonesty and is cause for **immediate removal from the course.** If you have any questions about whether a resource may be used, or if you are in need of support, submit a help request.

## Self-Grading Process

When submitting your work via a pull request, make sure to include a grade for each prompt in the PR's comment:

### Grading Outline

- [ ] react-pond
- [ ] node-req-count


### Grading Scale

| Grade                | Meaning                                                                                                                                                                                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Complete             | You believe your solution to be fully complete and meeting the specified requirements.                                                                                                                                                                                                                |
| Mostly complete      | Your solution is well on its way to being complete, but you ran out of time or can't remember exactly how to do *one* particular aspect. You believe anyone who understands the problem well would endorse your solution as the right one, and know pretty clearly how to finish up any last touches. |
| Significant progress | You have the right idea and were heading in a good direction. Covers everything between Mostly Complete and Attempted.                                                                                                                                                                                |
| Attempted            | You were very challenged by the prompt and had trouble making any significant progress on the problem, but wrote at least one meaningful line of code that appears to be a genuine attempt.                                                                                                           |
| Not attempted        | Whether you've thought much about the problem or not, you have no lines of code to show for the problem. (Note, you should avoid ever getting into a situation where this is the grade you'd give yourself. Make a passing attempt at each problem before going back to complete any one problem.)    |


Your comment should look like this:
```
first-prompt: grade
second-prompt: grade
...
```
## Submitting Solutions

Solutions are submitted via [Pull Requests](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select the `Pull Requests` tab and then create a `New pull request`.
2. STOP. *Before* you click `Create pull request` you must **adjust the `base branch`** (aka "target" branch) to be your username. Once changed, the pull-request heading should look like this:

  > hackreactor/repo : username&nbsp;&nbsp;←&nbsp;&nbsp;username/repo : master

3. Click `Create pull request`, which will present a comment box.
4. The title of your pull request should be your name.
5. The comment should be a list of your grades for each prompt. See the self-grading table for possible grades.
6. Click `Create pull request` again to submit your work.

**NOTE: Only submit one pull request per assessment.** You may continue working on the prompts and can submit more PRs after the instruction team has reviewed your work (which takes about one week), but submitting multiple PRs greatly complicates the review process and subverts our ability to observe your work in the context of specific time constraints.

Screencast demo for creating a Pull Request: [https://recordit.co/byqmcfltlM](https://recordit.co/byqmcfltlM)

## ES2015+ support

Spectator supports ES2015+ by transpiling files with [Babel](https://babeljs.io/). Any JavaScript feature included in the [latest preset](https://babeljs.io/docs/plugins/preset-latest/) can be used in a self assessment. The tradeoff for this support is that error messages can sometimes be a bit more obscure and/or line numbers in the stack trace don't map precisely to their original line numbers.

If this is not an acceptable tradeoff, you may write only ES5 code. Create a `spectator.json` file in the root of the individual prompt directory that looks like this:

```json
{
  "babel": false
}
```


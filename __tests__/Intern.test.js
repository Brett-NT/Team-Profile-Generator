const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Intern = require('../lib/Intern');

test('accepts prompts from Intern questions', () => {
    const intern = new Intern(internQuestions.internName);

    expect(intern.name).toBe(internQuestions.internName);
    expect(intern.id).toBe(internQuestions.internId);
    expect(intern.email).toBe(internQuestions.internEmail);
    expect(intern.githubName).toBe(internQuestions.internGithubName);
});
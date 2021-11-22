const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Engineer = require('../lib/Engineer');

test('accepts prompts from Engineer questions', () => {
    const engineer = new Engineer(engineerQuestions);

    expect(engineer.name).toBe(engineerQuestions.engineerName);
    expect(engineer.id).toBe(engineerQuestions.engineerId);
    expect(engineer.email).toBe(engineerQuestions.engineerEmail);
    expect(engineer.githubName).toBe(engineerQuestions.engineerGithubName);
});
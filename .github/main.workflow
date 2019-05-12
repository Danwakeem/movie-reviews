workflow "CI" {
  resolves = [
    "Lint",
    "Test",
  ]
  on = "push"
}

action "Install" {
  uses = "docker://node:11"
  args = "ci"
  runs = "npm"
}

action "Lint" {
  uses = "docker://node:11"
  args = "run lint"
  needs = ["Install"]
  runs = "npm"
}

action "Test" {
  uses = "ianwalter/puppeteer@v1.0.0"
  runs = "npm"
  args = "run git:test"
  needs = ["Install"]
}

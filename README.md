# makeall-hugo

A theme for [Hugo](http://gohugo.io/), a framework for building websites.

Based on [gohugo-theme-ananke-2.6.9](https://github.com/theNewDynamic/gohugo-theme-ananke/releases/tag/v2.6.9)

## Installation

### Golang

Check if `golang` is installed

```sh
go version
```

If not install 1.14+

### Hugo 

Install hugo

### Create Site

```sh
hugo new sire your_project
```

### Commit

Put project in github

### Hugo mod

From project's root directory

```sh
hugo mod init github.com/<your_user>/<your_project>
```

### config.toml

```toml
theme = ["github.com/ranuzz/makeall-hugo-theme"]
```
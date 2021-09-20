# makeall-hugo

A theme for [Hugo](http://gohugo.io/), built for [makeall](https://makeall.dev/) blogs.

Based on [gohugo-theme-ananke-2.6.9](https://github.com/theNewDynamic/gohugo-theme-ananke/releases/tag/v2.6.9)

## Installation

### Golang

Install [golang](https://golang.org/doc/install) 1.14+

```sh
go version
```

### Hugo 

Install [hugo](https://gohugo.io/getting-started/installing/)

### Create Site

```sh
hugo new sire your_project
```

### Hugo mod

From project's root directory

```sh
hugo mod init github.com/<your_user>/<your_project>
```

### config.toml

```toml
theme = ["github.com/ranuzz/makeall-hugo-theme"]
```
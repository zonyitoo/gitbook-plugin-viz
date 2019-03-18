# Viz.js plugin for GitBook

Plugin for [GitBook](https://github.com/GitbookIO/gitbook) 3 which renders [Viz.js](https://github.com/mdaines/viz.js) diagrams and flow charts detected in the book markdown.

## How to install it

In your book.json

```json
{
  "plugins": ["viz"]
}
```

## How to use it

    ```viz
    digraph {
        a -> b;
        b -> c;
        c -> d;
    }
    ```

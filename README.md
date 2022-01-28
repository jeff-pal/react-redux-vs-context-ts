# Redux vs React Context

This is a project to compare the usage of Redux and React Context for manage store between pages (routes).

# Run

```
npm i
npm start
```

# Notes

1. Create a file .env in the root path with the following content, before running `npm start`:

```
REACT_APP_STORE=<store_name>
```

**store_name** defines if the app will use redux or context provider.

Values: 
- redux 
- context

2. Do not use `window.location.replace('')` for redirecting pages, use `history('/page')` instead. Redirection with `window.location.replace('url')` refreshes the application, consequently its store (redux and context) gets the default value.
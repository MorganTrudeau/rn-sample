# rn-sample

## Steps to reproduce sourcemap error

### Install deps
```npm i```

### Create bundle
```
npx react-native bundle \                                       
    --platform android \
    --dev false \
    --entry-file index.js \
    --reset-cache \
    --bundle-output index.android.bundle \
    --sourcemap-output index.android.bundle.map \
    --minify false
```    

### Validate sourcemap
```node validate_sourcemap```

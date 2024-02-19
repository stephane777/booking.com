## booking.com clone

### Description :

The purpose of this project was meant to be a quick practice of the new release of Bootstrap 5.3
and refresh my sass skills as [styled components](https://styled-components.com/) was mainly used professionally.

This project only use Bootstrap classes & components directly added in `./src/main.html` thus all path in `image src tag` won't work due to webpack template loader, more information here [HTML template using &lt;img src='path' /&gt; won\'t work](https://github.com/jantimon/html-webpack-plugin/issues/1557)

The solution chosen was to require the assets along with the template loader.
[webpack 5 owner comment](https://github.com/jantimon/html-webpack-plugin/issues/1557#issuecomment-908992268)

### Overview :

![Booking.com clone screenshot](./src/assets/desktop_screenshot.png 'screenshot')

### Tools :

-   Bootstrap 5.3
-   sass
-   webpack

### Available script :

Before running any script run the following command :

```bash
git clone https://github.com/stephane777/booking.com.git
cd booking.com
npm install
```

For development mode run :

```bash
npm run dev
```

For production mode run :

```bash
npm run build
```

### Issues :

[issues](https://github.com/stephane777/booking.com/issues)

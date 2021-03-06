# lights-out!

It is a web app which helps to find Movies and TV Series for people who loves to relax in front of TV.

The app has 4 different sections:

1. **Trending Page** - users can see the list of trending Movies and TV series popular on that particular day.
2. **Movies Page** - users can find over 10.000 movies listed in this section. They can also filter them by genres.
3. **TV Series Page** - same as per movies page. The only difference is that users can only find TV series there.
4. **Search Page** - users can choose between Movies and TV series in addition to search them by the title.

I am using `themoviedb.org API` as my source for movies and tv series.

The lists are displayed as Cards which contains:
- Image (if not available it displays "Poster not available" image)
- Title
- Media type (movie or tv serie)
- Release date (if not available it displays "Unknown date")
- At the top right users can see the badge with overall rating out of ten. If the rating is more than 6 than the badge color is blue, else - the badge color is pink.

Users can click on any of the cards and the Modal is being displayed with:
- Image (if not available it displays "Poster not available" image)
- Title
- The year it was released
- Tagline
- Description
- Button "Watch the trailer" which opens a new page with the trailer on `www.youtube.com`

## Technologies used:

- ReactJS
- Material-ui (React library)
- HTML
- CSS

## How to run this app:

1. Clone this repo to your local computer `git clone https://github.com/sigii1992/lights-out.git`
2. `cd lights-out`
3. run `npm i` to install all the dependancies
3. run `npm start` to open the app

## Screeshots:
`Trending Page `
![trending](https://user-images.githubusercontent.com/81166702/156580580-d6ca03d9-245c-4537-815c-c37e1522a296.png)

`Movies Page`
![movies](https://user-images.githubusercontent.com/81166702/156580572-29e39d70-1621-445a-9679-ddcfb026c3d4.png)

`TV Series Page`
![tv](https://user-images.githubusercontent.com/81166702/156580581-ad93518f-7ab0-452a-999a-48f1adced885.png)

`Search Page`
![search1](https://user-images.githubusercontent.com/81166702/156580578-d52ac8d4-c435-4bfb-af2e-d2b2bbe63469.png)
![search2](https://user-images.githubusercontent.com/81166702/156580579-07067393-3b35-43ed-bb02-3e397fd2423d.png)

`Modal`
![modulo](https://user-images.githubusercontent.com/81166702/156581243-01fd030c-c5b8-49b9-ae15-1634043cc490.png)



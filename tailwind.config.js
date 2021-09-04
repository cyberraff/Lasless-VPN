module.exports = {
    purge: ["./index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {

        extend: {

            height: {
                "box-h": "40rem",
                "box-hh": "43rem",
                "box-glide": "26rem"
            },
            colors: {
                red: {
                    "550": "#F53838",
                },
                "bg-main": "#F6F6F6",
                "bg-last": "#F8F8F8"

            },

            backgroundImage: theme => ({
                '3hero-pattern': " linear-gradient(rgba(0, 0,0, 0.8), rgba(0, 0, 0, 0.8)),url('/img/Illustration-1.png')",
                'hero-pattern': " linear-gradient(rgba(0, 0,0, 0.8), rgba(0, 0, 0, 0.8)),url('/img/Illustration-1.png')",
                '2nd-hero-texture': " linear-gradient(rgba(0, 0,0, 0.8), rgba(0, 0, 0, 0.8)), url('/img/Illustration-2.png')",
            }),

            fontFamily: {
                rubik: "Rubik, sans-serif"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
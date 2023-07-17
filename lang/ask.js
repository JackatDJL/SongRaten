function asksrclang() {
    lang = localStorage.getItem('lang');
    from = localStorage.getItem('from');

    if (lang == 'de-DE') {
        var langsrc = `derjacklive.github.io/songraten/lang/de-DE/${from}lang.js`;	
    }

    if (lang == 'en-US') {
        var langsrc = `derjacklive.github.io/songraten/lang/en-US/${from}lang.js`;
    }

    if (lang == 'lat-UNI') {
        var langsrc = `derjacklive.github.io/songraten/lang/lat-UNI/${from}lang.js`;
    }
}

asksrclang();
reloadtext();
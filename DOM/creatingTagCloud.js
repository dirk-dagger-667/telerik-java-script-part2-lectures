var tags = ["cms", "javascript", "js", "ASP.NET MVC",
    ".net", ".net", "css", "wordpress", "xaml", "js",
    "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC",
    "wp", "javascript", "js", "cms", "html", "javascript",
    "http", "http", "CMS"];

generateTagCloud(tags, 17, 42);

function generateTagCloud(tags, minFontSize, maxFontSize) {

    tags = tagsToSortedArray(tags, maxCount);
    var maxCount = findMaxCountInArray(tags),
        stepOfIncreaseInTheFontSize = calcStepOfInreaseOfFontSize(maxCount, minFontSize, maxFontSize);
        

    printTagsArrayToHTML('ninny', stepOfIncreaseInTheFontSize, tags);

    function calcStepOfInreaseOfFontSize(maxCount, minFontSize, maxFontSize) {

        return ((maxFontSize - minFontSize) / maxCount) | 0;
    }

    function findMaxCountInArray(tags) {

        var maxCount = 0;

        for (var i in tags) {

            if (tags[i] > maxCount) {

                maxCount = tags[i];
            }
        }

        return maxCount;
    }

    function tagsToSortedArray(tags) {

        var sortedArray = [],
            counter = 1;

        for (var i = 0; i < tags.length; i++) {

            if (tags[i] !== null) {

                for (var j = i + 1; j < tags.length; j++) {

                    if (tags[j] !== null) {

                        if (tags[i].toLowerCase() === tags[j].toLowerCase()) {

                            tags[j] = null;
                            counter++;
                        }
                    }
                }

                sortedArray[tags[i].toLowerCase()] = counter;
                counter = 1;
            }
        }

        return sortedArray;
    }

    function printTagsArrayToHTML(parentElementID, stepOfIncreaseOfFontSize, tags) {

        var parentTag = document.getElementById(parentElementID),
        textFragment = document.createDocumentFragment('div');

        for (var i in tags) {

            var div = document.createElement('div');
            div.innerHTML = i;
            div.style.fontSize = minFontSize + stepOfIncreaseOfFontSize * tags[i] + 'px';

            textFragment.appendChild(div);
        }

        parentTag.appendChild(textFragment);
    }
}



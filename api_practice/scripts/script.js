const activity = document.querySelector('#activity');

fetch('https://www.boredapi.com/api/activity/')
    .then(data => data.json())

    .then(data => {
        console.log(data)

        const activityName = document.querySelector('#activity')
        activityName.innerHTML = data.activity;

        const activityType = document.querySelector('#type')
        activityType.innerHTML = data.type;

        const groupSize = document.querySelector('#group-size')
        groupSize.innerHTML = data.participants;

        const activityLink = document.querySelector('#activity-link')
        activityLink.innerHTML = data.link;

        const activityKey = document.querySelector('#activity-key')
        activityKey.innerHTML = data.key;

        const accessibility = document.querySelector('#accessibility')
        accessibility.innerHTML = data.accessibility;

    })
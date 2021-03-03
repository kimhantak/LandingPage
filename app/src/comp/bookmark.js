import React from 'react';
import site from './site.json';
import Icon from './icon';

export default function Bookmark() {
    const json = site;
    return (
        json.map((value, index) => {
            return (
                <Icon key={index} {...value} />
            )
        })
    );
}
import { Injectable } from '@angular/core';

@Injectable()
export class JZPDocService {

    getDocuments() {
        var docs = [];
        for(var i = 0; i <= 30; i++) {
            docs.push({
                "desc": "Jahreszielplanung",
                "klient": "Michael Bruckner",
                "date": "27.01.2017"
            });
        }
        return docs;
    }

}
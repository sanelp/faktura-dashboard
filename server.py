from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/faktura', methods=['GET'])
def get_faktura():
    faktura_data = {
        "fakturanummer": "2025-001",
        "dato": "01.03.2025",
        "selger": {
            "navn": "Sanel Pitnjakovic AS",
            "adresse": "Gate 45, 5000 Bergen",
            "orgnr": "987654321"
        },
        "kunde": {
            "navn": "Sanel Pitnjakovic",
            "adresse": "EnFinGate 5, 1700 Sarpsborg"
        },
        "varer": [
            {"beskrivelse": "IT-konsultasjon", "antall": 1, "pris_per_enhet": 1500, "mva": 0.25},
            {"beskrivelse": "Supportavtale", "antall": 1, "pris_per_enhet": 500, "mva": 0.25},
            {"beskrivelse": "Installasjon av Server", "antall": 1, "pris_per_enhet": 5000, "mva": 0.25}
        ],
        "betaling": {
            "total_eks_mva": 7000,
            "total_mva": 500,
            "total_inkl_mva": 7500,
            "betalingsfrist": "15.03.2025",
            "betalingsmetode": "Bankoverføring",
            "kontonummer": "1234 56 78910"
        }
    }

    return jsonify(faktura_data)

if __name__ == '__main__':
    app.run(debug=True)
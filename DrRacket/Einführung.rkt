;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname Einführung) (read-case-sensitive #t) (teachpacks ((lib "image.rkt" "teachpack" "2htdp"))) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ((lib "image.rkt" "teachpack" "2htdp")) #f)))
(define alles (+ 21 21))
(define one 1 )
(define michael-ballack (+ 23 75))
(define t1(star-polygon 100 3 2 "solid" "black"))
(define s1(square 100 "solid" "green"))
(define s2(square 100 "solid" "blue"))
(define c1(circle 50 "solid" "maroon"))
(define Mehrwertsteuer 0.19)
(define M Mehrwertsteuer)

(define Stromkosten
(lambda (Grundpreis Verbrauchspreis kWh)
    (+ Grundpreis (* Verbrauchspreis kWh))))

(define Billigstrom
  ;stellt die Variable kWh auf
  (lambda (kWh) 
    ;rechnet die Stromkosten mit den vorgegebenen Parametern aus
  (Stromkosten 1.26 0.44 kWh)))

(: billig-strom (natural -> rational)) 

(define billig-strom
  (lambda (kWh)
    (Stromkosten 4.90 0.19 kWh )))

(define Watt-für-wenig
  (lambda (kWh)
    (Stromkosten 8.20 0.16 kWh )))

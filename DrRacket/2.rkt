;; Die ersten drei Zeilen dieser Datei wurden von DrRacket eingefügt. Sie enthalten Metadaten
;; über die Sprachebene dieser Datei in einer Form, die DrRacket verarbeiten kann.
#reader(lib "beginner-reader.rkt" "deinprogramm" "sdp")((modname |2|) (read-case-sensitive #f) (teachpacks ()) (deinprogramm-settings #(#f write repeating-decimal #f #t none explicit #f ())))
(define Stromkosten
(lambda (Grundpreis Verbrauchspreis kWh)
    (+ Grundpreis (* Verbrauchspreis kWh))))

(: Stromkosten (rational rational natural -> rational))

(define billig-strom
  (lambda (kWh) 
  (Stromkosten 4.90 0.19 kWh)))

(: billig-strom (natural -> rational))
;c->f = celcius->fahrenheit
(define c->f
  (lambda (C)
    (+ 32 (* C (/ 9 5 )))))

;diese Funktion rechnet die gegebenen Grad Celcius in Grad Fahrenheit um
(: c->f (natural -> rational))
;f->c = fahrenheit>celcius
(define f->c
  (lambda (F)
   (/
    (-
     (* F 5)
     160 )
    9)))
    

;diese Funktion rechnet die gegebenen Grad Fahrenheit in Grad Celcius um
(: f->c (natural -> rational))

(check-expect (c->f 0) 32)
(check-expect (c->f 5) 41)
(check-expect (f->c 41) 5)
(check-expect (billig-strom 0) 4.9)
(check-expect (billig-strom 10) 6.8)
(check-expect (billig-strom 20) 8.7)
(check-expect (billig-strom 30) 10.6)
(check-expect (Stromkosten 5 0.63 250) 162.5)
(check-expect (Stromkosten 5 0.63 0 ) 5)
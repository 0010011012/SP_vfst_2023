;; Die ersten drei Zeilen dieser Datei wurden von DrRacket eingefügt. Sie enthalten Metadaten
;; über die Sprachebene dieser Datei in einer Form, die DrRacket verarbeiten kann.
#reader(lib "beginner-reader.rkt" "deinprogramm" "sdp")((modname |3|) (read-case-sensitive #f) (teachpacks ()) (deinprogramm-settings #(#f write repeating-decimal #f #t none explicit #f ())))
;verdoppelt einen String
(: double-string (string -> string))


(define double-string
  (lambda (Wort)
    (string-append Wort Wort )))


;vervierfacht einen String
(: quadruple-string (string -> string))

(define quadruple-string
  (lambda (Wort)
    ;(string-append Wort Wort Wort Wort )))
(double-string (double-string  Wort))))

;verändert normale Zeit in die Internetzeit .beats
; ein Beat sind 864 Zehntelsekunden
;Stunde mal 36.000
; Minute mal 600
;Sekunde mal 10
(: time->beats (natural natural natural natural -> string))

;rechnet die Zeit von Stunden, Minuten etc. in Zehntelsekunden um
(: Time->Zehntel (natural natural natural natural -> real))
(define Time->Zehntel
  (lambda (Stunde Minute Sekunde Zehntelsekunde)
    (+ (* Stunde 36000) 
       (* Minute 600)
        (* Sekunde 10)
           Zehntelsekunde) ))

(define time->beats
  (lambda (Stunde Minute Sekunde Zehntelsekunde)
    (beats->string 
    (/ (Time->Zehntel Stunde Minute Sekunde Zehntelsekunde )(Time->Zehntel 0 1 26 4 )))))

;wandelt das Ergebnis von time->beats in einen String und und kombiniert es mit einem @ vorne
(: beats->string (number -> string))
(define beats->string
  (lambda (beats)
    (string-append "@" (number->string beats))))

(check-expect (double-string "rennen") "rennenrennen")
(check-expect (double-string "") "")
(check-expect (quadruple-string "rennen") "rennenrennenrennenrennen")
(check-expect (quadruple-string "") "")
(check-expect (time->beats 0 0 0 0) "@0" )
(check-expect (time->beats 24 0 0 0 ) "@1000")
(check-expect (time->beats 12 0 0 0 ) "@500")
(check-expect (time->beats 0 1 26 4 ) "@1")
(check-expect (beats->string 1)"@1" )
(check-expect (time->beats 1 0 0 0) "@125/3") 
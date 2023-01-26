;; Die ersten drei Zeilen dieser Datei wurden von DrRacket eingefügt. Sie enthalten Metadaten
;; über die Sprachebene dieser Datei in einer Form, die DrRacket verarbeiten kann.
#reader(lib "beginner-reader.rkt" "deinprogramm" "sdp")((modname |4|) (read-case-sensitive #f) (teachpacks ()) (deinprogramm-settings #(#f write repeating-decimal #f #t none explicit #f ())))
(: say-number (known-numbers -> string))

(define say-number
(lambda (n)
  (cond
    ((= n 0) "zero")
    ((= n 1) "one")
    ((= n 2) "two")
    )))

(check-expect (say-number 0) "zero")
(check-expect (say-number 1) "one")
(check-expect (say-number 2) "two")

(define known-numbers
  (signature (enum 0 1 2)))
 ;(signature (integer-from-to 0 2))
(: cute? (pet -> boolean))
; Ein Haustier ist eins der folgenden:
; - Katze
; - Hund
; - Schlange
(define pet
(signature (enum "Katze" "Hund" "Schlange")))


(define cute?
  (lambda(p)
    (cond
      ((string=? p "Katze") #t)
      ((string=? p "Hund") #t)
      ((string=? p "Schlange") #f))))


 
(check-expect (cute? "Katze") #t)
(check-expect (cute? "Hund") #t)
(check-expect (cute? "Schlange") #f)